import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, Sparkles, Zap, Globe, BarChart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PodPilot AI - Create Automated Podcast Channels with AI',
  description: 'Create 24/7 automated podcast channels powered by AI. Generate episodes, voice them with AI, and publish to Spotify, Apple Podcasts, and more - all on autopilot.',
  keywords: ['AI podcast', 'automated podcast', 'podcast generator', 'AI voice', 'passive income'],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mic className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">PodPilot AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Podcast Creation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Create Podcast Channels
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              On Complete Autopilot
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            AI generates scripts, voices episodes, and publishes to Spotify, Apple Podcasts, 
            and YouTube automatically. Build your podcast empire while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-purple-500/25"
            >
              Start Creating Free
            </Link>
            <Link 
              href="#how-it-works" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition border border-white/20"
            >
              See How It Works
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            No credit card required • Free plan available • Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How PodPilot AI Works
            </h2>
            <p className="text-xl text-gray-300">
              From idea to published episode in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                1. AI Writes Scripts
              </h3>
              <p className="text-gray-300">
                Choose your niche and topic. Our AI researches and writes engaging, 
                professional podcast scripts tailored to your audience.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Mic className="h-7 w-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                2. AI Voices Episodes
              </h3>
              <p className="text-gray-300">
                Choose from premium AI voices or clone your own. Natural, 
                expressive narration that sounds human.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                3. Auto-Publish Everywhere
              </h3>
              <p className="text-gray-300">
                One-click publishing to Spotify, Apple Podcasts, Google Podcasts, 
                and YouTube. RSS feeds generated automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose PodPilot AI?
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to build a successful podcast network
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Generate and publish episodes in minutes, not hours',
              },
              {
                icon: BarChart,
                title: 'Smart Analytics',
                description: 'Track downloads, listeners, and revenue in real-time',
              },
              {
                icon: Shield,
                title: 'Monetization Ready',
                description: 'Built-in ads, sponsorships, and subscription options',
              },
              {
                icon: Globe,
                title: 'Global Distribution',
                description: 'Reach listeners on every major podcast platform',
              },
              {
                icon: Mic,
                title: 'Premium Voices',
                description: 'Access to 100+ natural-sounding AI voices',
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                description: 'Continuous improvement with latest AI models',
              },
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                <feature.icon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Start free, upgrade as you grow
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-gray-300">✓ 1 podcast channel</li>
                <li className="text-gray-300">✓ 5 episodes/month</li>
                <li className="text-gray-300">✓ Basic AI voices</li>
                <li className="text-gray-300">✓ Community support</li>
              </ul>
              <Link href="/signup" className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition">
                Get Started
              </Link>
            </div>
            
            <div className="bg-gradient-to-b from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Creator</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-gray-300">✓ 3 podcast channels</li>
                <li className="text-gray-300">✓ 30 episodes/month</li>
                <li className="text-gray-300">✓ Premium AI voices</li>
                <li className="text-gray-300">✓ Analytics dashboard</li>
                <li className="text-gray-300">✓ Priority support</li>
              </ul>
              <Link href="/signup" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-gray-300">✓ 10 podcast channels</li>
                <li className="text-gray-300">✓ Unlimited episodes</li>
                <li className="text-gray-300">✓ Voice cloning</li>
                <li className="text-gray-300">✓ White-label option</li>
                <li className="text-gray-300">✓ API access</li>
              </ul>
              <Link href="/signup" className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Podcast Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of creators building automated podcast networks with AI
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition shadow-lg shadow-purple-500/25"
          >
            Start Creating Free Today
          </Link>
          <p className="text-gray-400 mt-6">
            No credit card required • Free plan includes 5 episodes/month
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mic className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold text-white">PodPilot AI</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2026 PodPilot AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
