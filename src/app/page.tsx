'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Package, Star, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Meja Kerja Minimalis',
      category: 'meja',
      image: '/api/placeholder/400/300',
      price: 'Rp 2.500.000'
    },
    {
      id: 2,
      name: 'Kursi Tamu Elegant',
      category: 'kursi',
      image: '/api/placeholder/400/300',
      price: 'Rp 1.800.000'
    },
    {
      id: 3,
      name: 'Lemari Pakaian Modern',
      category: 'lemari',
      image: '/api/placeholder/400/300',
      price: 'Rp 4.200.000'
    },
    {
      id: 4,
      name: 'Rak Buku Minimalis',
      category: 'rak',
      image: '/api/placeholder/400/300',
      price: 'Rp 1.200.000'
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'meja', name: 'Meja' },
    { id: 'kursi', name: 'Kursi' },
    { id: 'lemari', name: 'Lemari' },
    { id: 'rak', name: 'Rak' }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MUHABBATIN NAUFAL MAROM
                </h1>
                <p className="text-xs text-gray-600">Furnitur Kayu Berkualitas</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#produk" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Furnitur Kayu Premium
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Furnitur Kayu
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Berkualitas Tinggi
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                <span className="font-semibold text-blue-600">MUHABBATIN NAUFAL MAROM</span> menyediakan berbagai macam furnitur kayu berkualitas dengan desain modern dan timeless. Dibuat dengan bahan pilihan dan dikerjakan oleh pengrajin berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Lihat Katalog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                  <Package className="w-24 h-24 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-gray-600">Bahan kayu pilihan dengan proses produksi standar tinggi</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Desain Modern</h3>
                <p className="text-gray-600">Model terkini yang mengikuti tren furnitur internasional</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lokasi Strategis</h3>
                <p className="text-gray-600">Workshop di Jakarta Timur, mudah dijangkau dan dikunjungi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MUHABBATIN NAUFAL MAROM
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan furnitur kayu terbaik untuk kebutuhan rumah dan kantor Anda
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {product.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MUHABBATIN NAUFAL MAROM
                </span>
              </h2>
              <p className="text-gray-600 mb-4">
                Kami adalah spesialis industri furnitur kayu yang telah berpengalaman dalam menciptakan berbagai macam produk furnitur berkualitas tinggi. Dengan lokasi workshop di Kalisari Raya, Pasar Rebo, Jakarta Timur, kami siap melayani kebutuhan furnitur Anda.
              </p>
              <p className="text-gray-600 mb-6">
                Setiap produk kami dibuat dengan teliti oleh pengrajin berpengalaman, menggunakan bahan kayu pilihan yang melalui proses pengeringan dan finishing standar industri untuk memastikan kualitas dan ketahanan terbaik.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Produk Terjual</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center">
                <Package className="w-32 h-32 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Konsultasi gratis dan penawaran terbaik untuk kebutuhan furnitur Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-sm text-gray-600">Kalisari Raya, Desa/Kelurahan Kalisari, Kec. Pasar Rebo, Kota Adm. Jakarta Timur, Provinsi DKI Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-sm text-gray-600">085285703582</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">info@muhabbatinfurniture.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">MUHABBATIN NAUFAL MAROM</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Spesialis industri furnitur kayu berkualitas tinggi dengan desain modern dan timeless.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Furnitur Rumah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Furnitur Kantor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Interior</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MUHABBATIN NAUFAL MAROM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}