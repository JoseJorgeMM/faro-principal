import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

// --- CONFIGURACIÓN DE LA GALERÍA ---
// Instrucciones:
// 1.  Añade o edita las categorías en la lista `galleryData`.
// 2.  `id`: Un identificador único para la URL (ej. "exterior-torre-1").
// 3.  `title`: El título que se mostrará en la tarjeta (ej. "Exterior Torre 1").
// 4.  `description`: Texto corto para la tarjeta de la categoría.
// 5.  `folderName`: El nombre exacto de la carpeta en `public/galeria`.
// 6.  `imageCount`: El número de imágenes que tienes en esa carpeta.
// 7.  `thumbnail`: la imagen que se mostrará en la tarjeta de la categoría.

const galleryData = [
  {
    id: "exterior-torre-1",
    title: "Exterior Torre 1",
    description: "Vistas externas de la Torre 1.",
    folderName: "exterior torre 1",
    imageCount: 2,
    thumbnail: "/galeria/exterior torre 1/exterior1.png",
  },
  {
    id: "exterior-torre-2",
    title: "Exterior Torre 2",
    description: "Vistas externas de la Torre 2.",
    folderName: "exterior torre 2",
    imageCount: 1,
    thumbnail: "/galeria/exterior torre 2/exterior torre 21.png",
  },
  {
    id: "salon-social",
    title: "Salón Social",
    description: "Espacios para eventos y reuniones.",
    folderName: "salon social",
    imageCount: 1,
    thumbnail: "/galeria/salon social/salon social1.png",
  },
  {
    id: "pasillos",
    title: "Pasillos",
    description: "Pasillos y áreas de circulación.",
    folderName: "pasillos",
    imageCount: 1,
    thumbnail: "/galeria/pasillos/pasillos1.png",
  },
  {
    id: "interiores-torre-1",
    title: "Interiores Torre 1",
    description: "Vistas internas de la Torre 1.",
    folderName: "interiores torre 1",
    imageCount: 1,
    thumbnail: "/galeria/interiores torre 1/interiores torre 11.png",
  },
  {
    id: "interiores-torre-2",
    title: "Interiores Torre 2",
    description: "Vistas internas de la Torre 2.",
    folderName: "interiores torre 2",
    imageCount: 1,
    thumbnail: "/galeria/interiores torre 2/interiores torre 21.png",
  },
  {
    id: "parqueadero",
    title: "Parqueadero",
    description: "Zonas de estacionamiento.",
    folderName: "parqueadero",
    imageCount: 1,
    thumbnail: "/galeria/parqueadero/parqueadero1.png",
  },
  {
    id: "zona-comun",
    title: "Zona Común",
    description: "Áreas comunes y de esparcimiento.",
    folderName: "zona comun",
    imageCount: 1,
    thumbnail: "/galeria/zona comun/zona comun1.png",
  },
  {
    id: "porteria",
    title: "Portería",
    description: "Acceso principal y zona de recepción.",
    folderName: "porteria",
    imageCount: 1,
    thumbnail: "/galeria/porteria/porteria1.png",
  },
  {
    id: "entrada-principal",
    title: "Entrada Principal",
    description: "Vista de la entrada principal.",
    folderName: "entrada principal",
    imageCount: 1,
    thumbnail: "/galeria/entrada principal/entrada principal1.png",
  },
];

// --- COMPONENTES ---

const CategoryGrid = () => (
  <div>
    <div className="text-center mb-12">
      <h1 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-4">
        Galería de Fotos
      </h1>
      <p className="text-xl text-brand-gray max-w-2xl mx-auto">
        Explora nuestras categorías y descubre cada espacio del conjunto residencial.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {galleryData.map((category) => (
        <Link to={`/galeria/${category.id}`} key={category.id} className="group">
          <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={category.thumbnail}
                  alt={`Imagen de ${category.title}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg text-brand-blue-dark">{category.title}</h3>
                <p className="text-sm text-brand-gray-dark mt-1">{category.description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);

const ImageGrid = ({ category }) => {
  const navigate = useNavigate();

  const generateImagePaths = () => {
    const paths = [];
    const folderPath = `/galeria/${category.folderName}`;
    const imageName = category.folderName.replace(/ /g, ' '); // Normalizar nombre para el archivo
    for (let i = 1; i <= category.imageCount; i++) {
      paths.push(`${folderPath}/${imageName}${i}.png`);
    }
    return paths;
  };

  const images = generateImagePaths();

  return (
    <div>
      <div className="mb-12">
        <Button 
          variant="outline" 
          onClick={() => navigate('/galeria')}
          className="border-brand-green-vivid text-brand-green-vivid hover:bg-brand-green-soft mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a todas las categorías
        </Button>
        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue-dark mb-2">
          {category.title}
        </h1>
        <p className="text-xl text-brand-gray">{category.description}</p>
      </div>
      
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={src} 
                alt={`${category.title} - Imagen ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-brand-gray text-lg">
          No hay imágenes disponibles para esta sección todavía.
        </div>
      )}
    </div>
  );
};


const Galeria = () => {
  const { section } = useParams();
  const currentCategory = section ? galleryData.find(cat => cat.id === section) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-soft via-white to-brand-green-soft">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {currentCategory ? (
          <ImageGrid category={currentCategory} />
        ) : (
          <CategoryGrid />
        )}
      </main>
    </div>
  );
};

export default Galeria;