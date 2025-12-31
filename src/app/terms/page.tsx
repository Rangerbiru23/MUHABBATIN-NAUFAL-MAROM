'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Package, FileText, Shield, AlertCircle, CheckCircle, Gavel } from 'lucide-react'

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 mb-4">
              Selamat datang di website <span className="font-semibold text-blue-600">MUHABBATIN NAUFAL MAROM</span>. Dokumen ini berisi syarat dan ketentuan yang mengatur penggunaan website dan layanan kami. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
            </p>
            <p className="text-gray-600">
              Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, harap jangan menggunakan website atau layanan kami.
            </p>
          </div>

          {/* Services Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">MUHABBATIN NAUFAL MAROM</span> menyediakan layanan berikut:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Penjualan furnitur kayu berkualitas (meja, kursi, lemari, rak, dll)</li>
              <li>Konsultasi desain furnitur custom</li>
              <li>Layanan pemesanan online dan offline</li>
              <li>Pengiriman produk ke seluruh Indonesia</li>
              <li>Layanan purnajual dan garansi produk</li>
              <li>Informasi dan edukasi tentang furnitur kayu</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Akurat</h3>
                <p className="text-gray-600">Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini saat melakukan pemesanan atau registrasi.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Penggunaan yang Sah</h3>
                <p className="text-gray-600">Website ini hanya boleh digunakan untuk tujuan yang sah dan sesuai dengan hukum yang berlaku di Indonesia.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelektual Property</h3>
                <p className="text-gray-600">Anda tidak boleh menyalin, mendistribusikan, atau menggunakan konten website kami tanpa izin tertulis dari kami.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Keamanan Akun</h3>
                <p className="text-gray-600">Anda bertanggung jawab untuk menjaga kerahasiaan informasi login dan keamanan akun Anda.</p>
              </div>
            </div>
          </div>

          {/* Ordering and Payment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proses Pemesanan</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pilih produk yang diinginkan dari katalog kami</li>
                  <li>Isi formulir pemesanan dengan informasi lengkap</li>
                  <li>Konfirmasi pesanan dan lakukan pembayaran</li>
                  <li>Tim kami akan menghubungi Anda untuk konfirmasi lebih lanjut</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                <p className="text-gray-600 mb-2">Kami menerima berbagai metode pembayaran:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Transfer bank (BCA, Mandiri, BNI, BRI)</li>
                  <li>E-wallet (GoPay, OVO, DANA)</li>
                  <li>Pembayaran tunai (untuk pickup di workshop)</li>
                  <li>Payment gateway terpercaya</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Konfirmasi Pembayaran</h3>
                <p className="text-gray-600">Pembayaran harus dikonfirmasi maksimal 2x24 jam setelah transfer. Pesanan akan diproses setelah pembayaran terverifikasi.</p>
              </div>
            </div>
          </div>

          {/* Shipping and Delivery */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pengiriman dan Pengantaran</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Waktu Produksi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Produk ready stock: 1-3 hari kerja</li>
                  <li>Produk pre-order: 2-4 minggu (tergantung kompleksitas)</li>
                  <li>Produk custom: 4-8 minggu (setelah desain disetujui)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Biaya Pengiriman</h3>
                <p className="text-gray-600">Biaya pengiriman dihitung berdasarkan berat produk, dimensi, dan lokasi pengiriman. Kami akan memberikan estimasi biaya sebelum konfirmasi pesanan.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Layanan Pengiriman</h3>
                <p className="text-gray-600">Kami bekerja sama dengan jasa pengiriman terpercaya untuk memastikan produk Anda sampai dengan aman dan tepat waktu.</p>
              </div>
            </div>
          </div>

          {/* Returns and Warranty */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pengembalian dan Garansi</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pengembalian dapat dilakukan dalam 7 hari setelah produk diterima</li>
                  <li>Produk harus dalam kondisi asli dan tidak rusak</li>
                  <li>Biaya pengiriman pengembalian ditanggung pembeli</li>
                  <li>Custom order tidak dapat dikembalikan kecuali ada cacat produksi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Garansi Produk</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Garansi konstruksi: 1 tahun</li>
                  <li>Garansi finishing: 6 bulan</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan yang salah</li>
                  <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">MUHABBATIN NAUFAL MAROM</span> tidak bertanggung jawab atas:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
              <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
              <li>Kerusakan akibat penggunaan yang tidak sesuai dengan petunjuk</li>
              <li>Perbedaan warna antara foto produk dan produk asli (karena faktor lighting dan monitor)</li>
              <li>Kesalahan yang disebabkan oleh force majeure (bencana alam, huru hara, dll)</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Gavel className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, desain, logo, dan software, adalah milik <span className="font-semibold text-blue-600">MUHABBATIN NAUFAL MAROM</span> atau dilisensikan kepada kami.
            </p>
            
            <p className="text-gray-600">
              Penggunaan konten tanpa izin tertulis merupakan pelanggaran hak cipta dan akan ditindak sesuai dengan hukum yang berlaku.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
            <p className="text-gray-600 mb-4">
              Kami berhak untuk mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan berlaku efektif segera setelah dipublikasikan di website ini.
            </p>
            <p className="text-gray-600">
              Penggunaan website Anda setelah perubahan merupakan penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
            <p className="mb-6">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
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
                <p className="text-sm">✉️ legal@muhabbatinfurniture.com</p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
            <p className="text-gray-600">
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan melalui negosiasi terlebih dahulu, dan jika tidak mencapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Jakarta, Indonesia.
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Syarat dan Ketentuan ini terakhir diperbarui pada 1 Januari 2024</p>
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