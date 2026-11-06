import { Producto } from './producto';

export type Categoria = 'Muebles' | 'Papelería' | 'Jardinería';

export interface ProductoCatalogo extends Producto {
    categoria: Categoria;
    descripcion: string;
    imagen: string;
}

const imagen = (texto: string, fondo: string) =>
    `https://placehold.co/400x300/${fondo}/1d1d1f?text=${encodeURIComponent(texto)}`;

const MUEBLES = 'ffe9a8';
const PAPELERIA = 'e5e5ea';
const JARDIN = 'c8f2d4';

const DATOS: ProductoCatalogo[] = [
    // Muebles
    {
        id: 1, nombre: 'Silla de roble', categoria: 'Muebles', precio: 1850, existencias: 6,
        descripcion: 'Silla de madera maciza con respaldo curvo y acabado natural.',
        imagen: imagen('Silla de roble', MUEBLES)
    },
    {
        id: 2, nombre: 'Escritorio plegable', categoria: 'Muebles', precio: 2400, existencias: 4,
        descripcion: 'Se guarda contra la pared; ideal para espacios pequeños.',
        imagen: imagen('Escritorio plegable', MUEBLES)
    },
    {
        id: 3, nombre: 'Librero de cuatro niveles', categoria: 'Muebles', precio: 3200, existencias: 3,
        descripcion: 'Estructura de metal negro con repisas de madera clara.',
        imagen: imagen('Librero', MUEBLES)
    },
    {
        id: 4, nombre: 'Lámpara de mesa', categoria: 'Muebles', precio: 680, existencias: 12,
        descripcion: 'Base de cerámica y pantalla de tela, luz cálida.',
        imagen: imagen('Lámpara de mesa', MUEBLES)
    },
    {
        id: 5, nombre: 'Banco alto', categoria: 'Muebles', precio: 950, existencias: 8,
        descripcion: 'Asiento redondo con patas de acero y descansapiés.',
        imagen: imagen('Banco alto', MUEBLES)
    },
    {
        id: 6, nombre: 'Mesa auxiliar', categoria: 'Muebles', precio: 1100, existencias: 7,
        descripcion: 'Mesa redonda pequeña, perfecta junto al sillón.',
        imagen: imagen('Mesa auxiliar', MUEBLES)
    },
    {
        id: 7, nombre: 'Perchero de pie', categoria: 'Muebles', precio: 540, existencias: 10,
        descripcion: 'Seis ganchos y base estable, de bambú.',
        imagen: imagen('Perchero de pie', MUEBLES)
    },

    // Papelería
    {
        id: 8, nombre: 'Cuaderno de tapa dura', categoria: 'Papelería', precio: 95, existencias: 40,
        descripcion: '120 hojas punteadas, ideales para notas y bocetos.',
        imagen: imagen('Cuaderno tapa dura', PAPELERIA)
    },
    {
        id: 9, nombre: 'Set de plumas fuente', categoria: 'Papelería', precio: 420, existencias: 15,
        descripcion: 'Tres plumas con cartuchos de tinta azul y negra.',
        imagen: imagen('Plumas fuente', PAPELERIA)
    },
    {
        id: 10, nombre: 'Acuarelas 24 colores', categoria: 'Papelería', precio: 310, existencias: 18,
        descripcion: 'Pastillas de color con pincel de punta fina incluido.',
        imagen: imagen('Acuarelas', PAPELERIA)
    },
    {
        id: 11, nombre: 'Marcadores doble punta', categoria: 'Papelería', precio: 180, existencias: 25,
        descripcion: 'Paquete de 12 tonos para letras y subrayados.',
        imagen: imagen('Marcadores', PAPELERIA)
    },
    {
        id: 12, nombre: 'Agenda semanal', categoria: 'Papelería', precio: 140, existencias: 30,
        descripcion: 'Vista por semana con espacio para pendientes.',
        imagen: imagen('Agenda semanal', PAPELERIA)
    },
    {
        id: 13, nombre: 'Washi tape (10 piezas)', categoria: 'Papelería', precio: 60, existencias: 50,
        descripcion: 'Cintas decorativas de distintos patrones.',
        imagen: imagen('Washi tape', PAPELERIA)
    },
    {
        id: 14, nombre: 'Sello con tinta', categoria: 'Papelería', precio: 35, existencias: 60,
        descripcion: 'Sello de goma con almohadilla de tinta negra.',
        imagen: imagen('Sello con tinta', PAPELERIA)
    },

    // Jardinería
    {
        id: 15, nombre: 'Maceta de barro', categoria: 'Jardinería', precio: 85, existencias: 35,
        descripcion: 'Maceta clásica de 20 cm con plato.',
        imagen: imagen('Maceta de barro', JARDIN)
    },
    {
        id: 16, nombre: 'Set de herramientas', categoria: 'Jardinería', precio: 360, existencias: 14,
        descripcion: 'Pala, rastrillo y tijeras de mano con mango ergonómico.',
        imagen: imagen('Set herramientas', JARDIN)
    },
    {
        id: 17, nombre: 'Regadera de metal', categoria: 'Jardinería', precio: 260, existencias: 9,
        descripcion: 'Capacidad de 5 litros, pico largo.',
        imagen: imagen('Regadera de metal', JARDIN)
    },
    {
        id: 18, nombre: 'Suculentas surtidas', categoria: 'Jardinería', precio: 120, existencias: 22,
        descripcion: 'Paquete de tres plantas pequeñas, fáciles de cuidar.',
        imagen: imagen('Suculentas', JARDIN)
    },
    {
        id: 19, nombre: 'Tierra para macetas 10 kg', categoria: 'Jardinería', precio: 150, existencias: 16,
        descripcion: 'Mezcla con composta para plantas de interior.',
        imagen: imagen('Tierra 10 kg', JARDIN)
    },
    {
        id: 20, nombre: 'Semillas de albahaca', categoria: 'Jardinería', precio: 40, existencias: 45,
        descripcion: 'Sobre con semillas para huerto en casa.',
        imagen: imagen('Semillas albahaca', JARDIN)
    },
];

export const PRODUCTOS_CATALOGO: ProductoCatalogo[] = DATOS.map((p) => ({
    ...p,
    imagen: `img/${p.id}.jpg`,
}));