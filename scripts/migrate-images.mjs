
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
)

const bucket = 'Products'

async function migrateImages() {
    const { data: products, error } = await supabase
        .from('products')
        .select('id, name, image_url')

    if (error) {
        console.log('Database error:', error.message)
        return
    }

    for (const product of products) {
        if (!product.image_url) {
            console.log('No image:', product.name)
            continue
        }

        try {
            console.log('Downloading:', product.name)

            const response = await fetch(product.image_url)

            if (!response.ok) {
                console.log('Download error:', product.name, response.status)
                continue
            }

            const contentType =
                response.headers.get('content-type') || 'image/webp'

            if (!contentType.startsWith('image/')) {
                console.log('Invalid image:', product.name)
                continue
            }

            const extension = contentType.includes('png')
                ? 'png'
                : contentType.includes('jpeg')
                    ? 'jpg'
                    : contentType.includes('webp')
                        ? 'webp'
                        : 'img'

            const path = `${product.id}.${extension}`
            const image = await response.arrayBuffer()

            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(path, image, {
                    contentType,
                    upsert: true,
                })

            if (uploadError) {
                console.log('Upload error:', product.name, uploadError.message)
                continue
            }

            const { data: urlData } = supabase.storage
                .from(bucket)
                .getPublicUrl(path)

            const { error: updateError } = await supabase
                .from('products')
                .update({ image_url: urlData.publicUrl })
                .eq('id', product.id)

            if (updateError) {
                console.log('Update error:', product.name, updateError.message)
                continue
            }

            console.log('Success:', product.name)
        } catch (error) {
            console.log('Failed:', product.name, error.message)
        }
    }

    console.log('Migration finished!')
}

migrateImages()
