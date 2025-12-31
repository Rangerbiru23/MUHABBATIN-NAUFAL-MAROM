'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Package, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'

export default function PrivacyPolicy() {
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
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 mb-4">
              Selamat datang di <span className="font-semibold text-blue-600">MUHABBATIN NAUFAL MAROM</span>. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan website dan layanan kami.
            </p>
            <p className="text-gray-600">
              Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan privasi ini.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran (diproses oleh pihak ketiga yang terpercaya)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Sistem operasi</li>
                  <li>Data cookies dan tracking</li>
                  <li>Halaman yang dikunjungi</li>
                  <li>Waktu akses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cara Kami Menggunakan Informasi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Memproses Pesanan</h4>
                    <p className="text-gray-600 text-sm">Untuk memproses dan mengirimkan pesanan furnitur Anda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Layanan Pelanggan</h4>
                    <p className="text-gray-600 text-sm">Menjawab pertanyaan dan memberikan dukungan teknis</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Peningkatan Layanan</h4>
                    <p className="text-gray-600 text-sm">Menganalisis data untuk meningkatkan pengalaman pengguna</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marketing</h4>
                    <p className="text-gray-600 text-sm">Mengirim informasi produk dan penawaran spesial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">MUHABBATIN NAUFAL MAROM</span> berkomitmen untuk melindungi data pribadi Anda dengan menerapkan langkah-langkah keamanan yang ketat:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Enkripsi data saat transmisi dan penyimpanan</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>System monitoring keamanan 24/7</li>
              <li>Update keamanan berkala</li>
              <li>Komplain dengan standar industri keamanan data</li>
            </ul>
          </div>

          {/* Third Party Sharing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pembagian Informasi dengan Pihak Ketiga</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga untuk keperluan marketing tanpa persetujuan Anda. Kami hanya membagikan informasi dalam kondisi berikut:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Penyedia Layanan:</strong> Partner logistik untuk pengiriman produk</li>
              <li><strong>Payment Gateway:</strong> Prosesor pembayaran yang terpercaya</li>
              <li><strong>Legal Requirements:</strong> Saat diwajibkan oleh hukum</li>
              <li><strong>Business Transfer:</strong> Dalam kasus merger atau akuisisi</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
            
            <p className="text-gray-600 mb-4">
              Sebagai pengguna, Anda memiliki hak-hak berikut terkait data pribadi Anda:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Akses Data</h4>
                <p className="text-blue-700 text-sm">Mengakses dan menyalin data pribadi yang kami simpan</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Koreksi Data</h4>
                <p className="text-purple-700 text-sm">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Hapus Data</h4>
                <p className="text-green-700 text-sm">Meminta penghapusan data pribadi Anda</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Portabilitas Data</h4>
                <p className="text-orange-700 text-sm">Memindahkan data ke layanan lain</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
            <p className="mb-6">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, silakan hubungi kami:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">MUHABBATIN NAUFAL MAROM</p>
                  <p className="text-sm opacity-90">Industri Furnitur Kayu</p>
                </div>
              </div>
              <div className="ml-13 space-y-2">
                <p className="text-sm">📍 Kalisari Raya, Desa/Kelurahan Kalisari, Kec. Pasar Rebo, Kota Adm. Jakarta Timur, Provinsi DKI Jakarta</p>
                <p className="text-sm">📞 085285703582</p>
                <p className="text-sm">✉️ privacy@muhabbatinfurniture.com</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Kebijakan Privasi ini terakhir diperbarui pada 1 Januari 2024</p>
            <p className="mt-2">Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold">MUHABBATIN NAUFAL MAROM</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Spesialis industri furnitur kayu berkualitas tinggi
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; 2024 MUHABBATIN NAUFAL MAROM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}