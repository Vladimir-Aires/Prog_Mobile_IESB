

// scripts/seedSupabase.js
import { createClient } from '@supabase/supabase-js';
import axios from 'axios'; // Importe o Axios

// Configurações do Supabase (substitua pelas suas)
const supabaseUrl = 'https://mcuudumtyoolqpgmhmbj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdXVkdW10eW9vbHFwZ21obWJqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDM0OTAyOCwiZXhwIjoyMDY1OTI1MDI4fQ.8CLcNgacBRTWUkC9V5OTg-NAmtikRuUchvdZEB6x4SY'; // ATENÇÃO: Use a chave SERVICE_ROLE

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedProducts() {
  try {
    console.log('Buscando produtos do DummyJSON com Axios...');
    
    // --- MUDANÇA AQUI: Usando axios.get ---
    const response = await axios.get('https://dummyjson.com/products?limit=200');
    const allProducts = response.data.products; // Axios já retorna os dados no .data
    // --- FIM DA MUDANÇA ---

    const mainCategories = [
      "laptops",
      "mens-watches",
      "mobile-accessories",
      "smartphones",
      "tablets",
      "womens-watches",
    ];

    const filteredProducts = allProducts.filter(product =>
      mainCategories.includes(product.category)
    );
    
    console.log(`Encontrados ${filteredProducts.length} produtos filtrados para inserir.`);

    const productsToInsert = filteredProducts.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      tags: product.tags,
      brand: product.brand,
      sku: product.sku,
      reviews: product.reviews,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    }));

    const { data: insertedData, error } = await supabase
      .from('products')
      .insert(productsToInsert);

    if (error) {
      if (error.code === '23505') {
        console.warn('Produtos já existem na tabela. Ignorando duplicatas.');
      } else {
        throw error;
      }
    } else {
      console.log('Produtos inseridos com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao popular a tabela de produtos:', error.message);
    if (error.response) {
      // Axios retorna o objeto de resposta de erro para mais detalhes
      console.error('Detalhes do erro da requisição:', error.response.data);
      console.error('Status:', error.response.status);
    }
  } finally {
    process.exit(0);
  }
}

seedProducts();