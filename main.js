// 1. Вывод информации о ссылках, якорях и изображениях

document.addEventListener('DOMContentLoaded', function () {
    const allLinks = document.querySelectorAll('a[href]');
    console.log(`Всего ссылок: ${allLinks.length}`);
    allLinks.forEach((link, i) => {
        console.log(`   ${i + 1}. URL: "${link.href}", текст: "${link.textContent.trim()}"`);
    });

    const anchors = document.querySelectorAll('a[href^="#"]');
    console.log(`Якорные ссылки: ${anchors.length}`);
    anchors.forEach((anchor, i) => {
        console.log(`   ${i + 1}. Якорь: "${anchor.getAttribute('href')}"  цель: ${anchor.getAttribute('href')}`);
    });

    const images = document.querySelectorAll('img');
    console.log(`Изображений: ${images.length}`);
    images.forEach((img, i) => {
        console.log(`   ${i + 1}. src: "${img.src}", alt: "${img.alt}"`);
    });
});

// 2. Обработчики событий разных типов
// ===============================================
document.addEventListener('DOMContentLoaded', function () {
    // --- Событие клика по кнопкам оформления ---
    const orderButtons = document.querySelectorAll('button.btn-success, a[href="order.html"]');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Клик по кнопке/ссылке:', e.target.textContent?.trim() || 'без текста');
        });
    });

    // --- Событие наведения на карточки ---
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log('Наведение на карточку');
        });
        card.addEventListener('mouseleave', () => {
            console.log('Уход с карточки');
        });
    });
});

// 3. Анимация перелистывания картинок
document.addEventListener('DOMContentLoaded', function () {
    const imageSources = [
        'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_692281fd1443433a38ce5ea2_6922821addb2393c9559e022/scale_1200',
        'https://avatars.mds.yandex.net/i?id=616237c4ba546468671210576667bb94c3204edb-12602673-images-thumbs&n=13',
        'https://i.pinimg.com/736x/d4/32/7c/d4327c6f4b3679e34f013cb0c76d0cf2.jpg',
        "https://petbistro.ru/upload/medialibrary/89f/rkwkir1cf7k6jt9d6tp7xdtpg735mw6s.jpg"
    ];

    const mainImage = document.getElementById('main-animated-image') || 
                      document.querySelector('.card-img-top'); // fallback

    if (mainImage) {
        let index = 0;
        setInterval(() => {
            index = (index + 1) % imageSources.length;
            mainImage.src = imageSources[index];
            console.log('Смена изображения:', imageSources[index]);
        }, 3000);
    }
});

function onClickButton(){
    alert("Вы закрыли выгодное предложение");
}

