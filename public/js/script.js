const mainImage = document.getElementById('mainImage');
const thumbnailImages = document.querySelectorAll('.thumbnail');

thumbnailImages.forEach(image => {
  image.addEventListener('click', () => {
    // Obtener la URL de la imagen de la miniatura
    const newSrc = image.src;

    // Reemplazar la imagen principal con la imagen de la miniatura
    mainImage.innerHTML = `<img src="${newSrc}" alt="Imagen del producto" class="w-full max-h-96 object-cover rounded-lg">`;
  });
});