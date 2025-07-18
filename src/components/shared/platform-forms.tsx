"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  CheckCircle,
  Info,
  Loader2
} from 'lucide-react'

interface FormFieldProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  success?: boolean
  icon?: React.ReactNode
  required?: boolean
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  success,
  icon,
  required
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && showPassword ? 'text' : type

  return (
    <div className="space-y-2">
      <Label className="text-brand-dark font-medium">
        {label} {required && <span className="text-brand-error">*</span>}
      </Label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-navy/60">
            {icon}
          </div>
        )}
        <Input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`form-input ${icon ? 'pl-10' : ''} ${type === 'password' ? 'pr-10' : ''} ${error
              ? 'border-brand-error focus:border-brand-error focus:ring-brand-error/20'
              : success
                ? 'border-brand-success focus:border-brand-success focus:ring-brand-success/20'
                : ''
            }`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-navy/60 hover:text-brand-navy transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        {success && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-success">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-2 text-sm text-brand-error">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
      {success && !error && (
        <div className="flex items-center gap-2 text-sm text-brand-success">
          <CheckCircle className="h-4 w-4" />
          Looks good!
        </div>
      )}
    </div>
  )
}

interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  onClose?: () => void
}

function Notification({ type, title, message, onClose }: NotificationProps) {
  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-brand-success/10 border-brand-success/20 text-brand-success'
      case 'error':
        return 'bg-brand-error/10 border-brand-error/20 text-brand-error'
      case 'warning':
        return 'bg-brand-warning/10 border-brand-warning/20 text-brand-warning'
      case 'info':
        return 'bg-brand-info/10 border-brand-info/20 text-brand-info'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5" />
      case 'error':
        return <X className="h-5 w-5" />
      case 'warning':
        return <AlertCircle className="h-5 w-5" />
      case 'info':
        return <Info className="h-5 w-5" />
    }
  }

  return (
    <div className={`rounded-lg border p-4 ${getStyles()}`}>
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1">
          <h4 className="font-medium text-brand-dark">{title}</h4>
          <p className="text-sm text-brand-navy mt-1">{message}</p>
        </div>
                 {onClose && (
           <button 
             onClick={onClose}
             className="text-brand-navy/60 hover:text-brand-navy transition-colors"
             aria-label="Close notification"
             title="Close notification"
           >
             <X className="h-4 w-4" />
           </button>
         )}
      </div>
    </div>
  )
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (email === 'demo@example.com' && password === 'demo123') {
        // Success
      } else {
        setError('Email atau password salah')
      }
    }, 2000)
  }

  return (
    <Card className="w-full max-w-md bg-white border-brand-cream shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-brand-dark text-2xl">Masuk ke Akun</CardTitle>
        <CardDescription className="text-brand-navy">
          Lanjutkan pembelajaran Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={setEmail}
            icon={<Mail className="h-4 w-4" />}
            required
          />

          <FormField
            label="Password"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={setPassword}
            icon={<Lock className="h-4 w-4" />}
            required
          />

          {error && (
            <Notification
              type="error"
              title="Login Gagal"
              message={error}
            />
          )}

          <Button
            type="submit"
            className="w-full btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Memproses...
              </>
            ) : (
              'Masuk'
            )}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-brand-navy">
            Belum punya akun?{' '}
            <a href="/register" className="link-interactive font-medium">
              Daftar sekarang
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.length < 2 ? 'Nama minimal 2 karakter' : ''
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Format email tidak valid' : ''
      case 'password':
        return value.length < 6 ? 'Password minimal 6 karakter' : ''
      case 'confirmPassword':
        return value !== formData.password ? 'Password tidak cocok' : ''
      default:
        return ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <Card className="w-full max-w-md bg-white border-brand-cream shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-brand-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-brand-success" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">
            Pendaftaran Berhasil!
          </h3>
          <p className="text-brand-navy mb-6">
            Silakan cek email Anda untuk verifikasi akun
          </p>
          <Button className="btn-primary">
            Kembali ke Login
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md bg-white border-brand-cream shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-brand-dark text-2xl">Buat Akun Baru</CardTitle>
        <CardDescription className="text-brand-navy">
          Bergabung dengan ribuan developer lainnya
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
            error={formData.name ? validateField('name', formData.name) : ''}
            success={formData.name.length >= 2}
            icon={<User className="h-4 w-4" />}
            required
          />

          <FormField
            label="Email"
            type="email"
            placeholder="nama@email.com"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            error={formData.email ? validateField('email', formData.email) : ''}
            success={/\S+@\S+\.\S+/.test(formData.email)}
            icon={<Mail className="h-4 w-4" />}
            required
          />

          <FormField
            label="Password"
            type="password"
            placeholder="Minimal 6 karakter"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            error={formData.password ? validateField('password', formData.password) : ''}
            success={formData.password.length >= 6}
            icon={<Lock className="h-4 w-4" />}
            required
          />

          <FormField
            label="Konfirmasi Password"
            type="password"
            placeholder="Ulangi password"
            value={formData.confirmPassword}
            onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
            error={formData.confirmPassword ? validateField('confirmPassword', formData.confirmPassword) : ''}
            success={formData.confirmPassword === formData.password && formData.confirmPassword.length > 0}
            icon={<Lock className="h-4 w-4" />}
            required
          />

          <Button
            type="submit"
            className="w-full btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Membuat Akun...
              </>
            ) : (
              'Daftar Sekarang'
            )}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-brand-navy">
            Sudah punya akun?{' '}
            <a href="/login" className="link-interactive font-medium">
              Masuk di sini
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setNotification({
        type: 'success',
        title: 'Pesan Terkirim!',
        message: 'Terima kasih! Kami akan merespons dalam 24 jam.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  return (
    <Card className="w-full max-w-2xl bg-white border-brand-cream shadow-lg">
      <CardHeader>
        <CardTitle className="text-brand-dark text-2xl">Hubungi Kami</CardTitle>
        <CardDescription className="text-brand-navy">
          Ada pertanyaan? Tim kami siap membantu Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {notification && (
          <Notification
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              label="Nama"
              type="text"
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              icon={<User className="h-4 w-4" />}
              required
            />

            <FormField
              label="Email"
              type="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              icon={<Mail className="h-4 w-4" />}
              required
            />
          </div>

          <FormField
            label="Subjek"
            type="text"
            placeholder="Topik pertanyaan"
            value={formData.subject}
            onChange={(value) => setFormData({ ...formData, subject: value })}
            required
          />

          <div className="space-y-2">
            <Label className="text-brand-dark font-medium">
              Pesan <span className="text-brand-error">*</span>
            </Label>
            <textarea
              placeholder="Tuliskan pesan Anda..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-3 py-2 border border-brand-secondary rounded-lg focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="btn-primary flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Mengirim...
                </>
              ) : (
                'Kirim Pesan'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-brand-secondary text-brand-navy hover:bg-brand-secondary/10"
              onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// Example usage component
export function FormShowcase() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Authentication Forms</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-4">Login Form</h3>
            <LoginForm />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-4">Registration Form</h3>
            <RegisterForm />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Contact Form</h2>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Notification Examples</h2>
        <div className="space-y-4 max-w-md">
          <Notification
            type="success"
            title="Sukses!"
            message="Data berhasil disimpan ke database."
          />
          <Notification
            type="error"
            title="Error!"
            message="Terjadi kesalahan saat memproses permintaan."
          />
          <Notification
            type="warning"
            title="Peringatan!"
            message="Session Anda akan berakhir dalam 5 menit."
          />
          <Notification
            type="info"
            title="Info"
            message="Fitur baru telah tersedia. Coba sekarang!"
          />
        </div>
      </section>
    </div>
  )
} 
