import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngFor="let product of products" class="product-container">
  <h3>
    <a class="name" [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>
  <img [src]="product.image" alt="{{ product.name }}" width="300">
  <p class="description">
    <strong> Description: </strong> {{ product.description }}
  </p>
  <p class="description">
    <strong>Rating: </strong> {{ product.rating }}
  </p>

  <a [href]="'https://wa.me/?text=Check%20out%20' + product.name + '%20at%20this%20link:%20' + product.buyLink"
     class="share-button">
     Share via WhatsApp
  </a>

  <a [href]="product.buyLink" class="buy-button">
     Buy in App
  </a>
</div>

  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [
    { name: 'LUXVISAGE Matt Ink Waterproof', description: 'Тип: подводка, текстура: жидкая, водостойкий: Да, цвет: черный, страна производства: Беларусь', rating: 4.6, image: '/assets/pic1.jpg', buyLink: "https://kaspi.kz/shop/p/luxvisage-matt-ink-waterproof-100120174?c=750000000&ref=shared_link" },
    { name: 'LANEIGE маска Lip Sleeping 3 мл', description: 'Восстанавливающая ночная маска для губ Laneige Special Care Lip Sleeping Mask глубоко увлажняет, питает, разглаживает нежную кожу губ, ускоряет заживление микроповреждений, придает губам соблазнительную полноту, яркость цвета и мягкость.', rating: 4.5, image: '/assets/pic2.jpg', buyLink: "https://kaspi.kz/shop/p/laneige-maska-lip-sleeping-3-ml-100697657/?c=750000000&sr=1&ref=shared_link" },
    { name: 'Патчи COSRX точечные Acne Pimple Master Patch противовоспалительные', description: 'Точечные аппликаторы Elizavecca для устранения проблем с кожей – небольшие гидро – коллоидные наклейки, применяемые в качестве средства быстрого целенаправленного удаления прыщей и покраснений на лице или теле. Для удобства пластыри круглой формы представлены разными размерами.', rating: 2.3, image: '/assets/pic3.jpg', buyLink: "https://kaspi.kz/shop/p/cosrx-tochechnye-acne-pimple-master-patch-protivovospalitel-nye-24-sht-100368434/?c=750000000&sr=1&ref=shared_link" },
    { name: 'SKIN&LAB Vitamin C Brightening сыворотка', description: 'Мощная, легкая осветляющая сыворотка с 15 комплексами витаминов, концентрированная с витамином С, помогает осветлить кожу и выровнять ее тон. Витаминные пузырьковые капсулы с антиоксидантами помогают сделать кожу здоровой, молодой и сияющей.', rating: 4.5, image: '/assets/pic4.jpg', buyLink: "https://kaspi.kz/shop/p/skin-lab-vitamin-c-brightening-syvorotka-30-ml-104829563/?c=750000000&sr=1&ref=shared_link" },
    { name: 'Round Lab тонер 1025 Dokdo Toner 500 мл', description: 'Тонер на основе глубоководной морской воды с острова Уллындо, отлично увлажняет, успокаивает и насыщает кожный покров полезными питательными веществами, нежно отшелушивает ороговевшие частички, кожный себум и разглаживает микрорельеф, а также регулирует работу сальных желез и предотвращает чрезмерную выработку себума, уменьшает жирность кожи. Особый запатентованный комплекс Hatching EX-07, содержащий энзимы.', rating: 3, image: '/assets/pic5.jpg' , buyLink: "https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-500-ml-107623855/?c=750000000&sr=2&ref=shared_link" },
    { name: 'Pixi тоник Clarity tonic 100 мл', description: 'Осветляющий тонер. Способствует более чистой коже. Подходит для всех типов кожи, особенно для кожи, склонной к высыпаниям.', rating: 4.2, image: '/assets/pic6.jpg', buyLink: "https://kaspi.kz/shop/p/pixi-tonik-clarity-tonic-100-ml-109367512/?c=750000000&sr=2&ref=shared_link" },
    { name: 'Dr.Ceuracle эссенция Vegan Kombucha Tea Essence 150 мл', description: 'Веганская крем-эссенция, созданная на основе экстракта чая комбуча, ферментированного черного чая, эффективно очищает кожу от загрязнений и одновременно увлажняет ее. Сбалансированная кремообразная и увлажняющая формулы плавно сочетаются в одном продукте (тоник, эссенция и увлажняющий крем одновременно), обеспечивая увлажнение и питание.', rating: 3.0, image: '/assets/pic7.jpg', buyLink: "https://kaspi.kz/shop/p/dr-ceuracle-essentsija-vegan-kombucha-tea-essence-150-ml-101239735/?c=750000000&sr=4&ref=shared_link" },
    { name: 'Инструмент для завивки', description: 'Cтрана производства: Казахстан, тип: инструмент для завивки, материал: нержавеющая сталь, особенности: многоразовый, цвет: розовый', rating: 3.5, image: '/assets/pic8.jpg', buyLink: "https://kaspi.kz/shop/p/instrument-dlja-zavivki-1-sht-107882794/?c=750000000&sr=1&ref=shared_link" },
    { name: 'Смартфон Apple iPhone 15 Pro Max 256Gb черный', description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.', rating: 4.9, image: '/assets/pic9.jpg', buyLink: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000&m=7080000&sr=1&ref=shared_link" },
    { name: 'Чехол Veles для iPhone 13 Pro Max прозрачный', description: 'Силиконовый чехол с усиленными углами защитит ваш iPhone 13 Pro Max от царапин и других повреждений даже при падении смартфона.', rating: 4.8, image: '/assets/pic10.jpg', buyLink: "https://kaspi.kz/shop/p/veles-dlja-iphone-13-pro-max-prozrachnyi-103651402/?c=750000000&sr=1&ref=shared_link" }
  ];

  share(product: any) {
    const message = `Check out ${product.name} at this link: ${product.buyLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  buy(link: string) {
    console.log('Buy link:', link);
    window.open(link, '_blank');
  }
  
}
