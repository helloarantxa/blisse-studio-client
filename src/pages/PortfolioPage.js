import React from 'react';

function PortfolioPage() {
  const products = [
    {
      id: 1,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2022/09/modern-miami-florist-centerpieces.jpg',
      imageAlt: 'Work 1',
      name: 'Soft Midsummer Nights Dream but make it Aesthetic',
    },
    {
      id: 2,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2022/09/villa-woodbine-miami-wedding-bouquet-17.jpg',
      imageAlt: 'Work 2',
      name: 'Chic Monochromatic Wedding Inspo',
    },
    {
      id: 5,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2021/01/Copy-of-miami-tablescape-floral-inspo-2-683x1024.jpg',
      imageAlt: 'Work 5',
      name: 'Minimalist Earth Toned Wedding',
    },
    {
      id: 3,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2022/09/3K8A5313.jpg',
      imageAlt: 'Work 3',
      name: 'Chic Garden Wedding with Citrus Accents',
    },
    {
      id: 4,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2022/08/neutral-earthy-color-palette-wedding-miami-6-edited-scaled.jpg',
      imageAlt: 'Work 4',
      name: 'Chic Monochromatic A Modern Wedding with a Reimagined Neutral Palette',
    },
    {
      id: 6,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2020/10/fall-inspired-bouquet-colorful-miami-florist-2-684x1024.jpg',
      imageAlt: 'Work 6',
      name: 'Terracotta and Mauve Ceremony in Miami Beach',
    },
    {
      id: 7,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2020/07/white-clean-tablescape-pink-centerpieces-3-683x1024.jpg',
      imageAlt: 'Work 7',
      name: 'A Chic and Modern Pink Wedding at a Miami Beach',
    },
    {
      id: 8,
      href: '#',
      imageSrc: 'https://simpleflorals.com/wp-content/uploads/2021/09/minimalist-wedding-miami-8-floral-recipe.jpg',
      imageAlt: 'Work 8',
      name: 'Modern & Minimalist Vizcaya Wedding',
    },
    
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">MY WORK</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                style={{ maxHeight: '250px' }} // Adjust the max height as desired
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center">{product.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;