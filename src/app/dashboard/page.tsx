'use client'

import { useState, useEffect } from 'react'
import { Mic, Plus, Play, BarChart, Settings, LogOut, Bell, TrendingUp, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'

interface Podcast {
  id: string
  title: string
  niche: string
  episodes: number
  listeners: number
}

export default function Dashboard() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, fetch from API
    // For now, mock data
    setPodcasts([
      { id: '1', title: 'AI News Daily', niche: 'Technology', episodes: 12, listeners: 1240 },
      { id: '2', title: 'True Crime Stories', niche: 'Entertainment', episodes: 8, listeners: 890 },
    ])
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Top Navigation */}
      <nav className="border-b border-white/10 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mic className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">PodPilot AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-white">
                <Settings className="h-6 w-6" />
              </button>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                M
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Episodes</p>
                <p className="text-3xl font-bold text-white mt-1">20</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Mic className="h-6 w-6 text-purple-400" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-green-400 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+12% from last month</span>
            </div>
          </div>

          <div className="bg-slate-800 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Listeners</p>
                <p className="text-3xl font-bold text-white mt-1">2,130</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-green-400 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+24% from last month</span>
            </div>
          </div>

          <div className="bg-slate-800 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Downloads</p>
                <p className="text-3xl font-bold text-white mt-1">5,847</p>
              </div>
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-pink-400" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-green-400 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+18% from last month</span>
            </div>
          </div>

          <div className="bg-slate-800 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Revenue</p>
                <p className="text-3xl font-bold text-white mt-1">$342</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-green-400 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+31% from last month</span>
            </div>
          </div>
        </div>

        {/* Podcasts Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Your Podcasts</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition">
              <Plus className="h-5 w-5" />
              <span>New Podcast</span>
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading your podcasts...</p>
            </div>
          ) : podcasts.length === 0 ? (
            <div className="bg-slate-800 border border-white/10 rounded-xl p-12 text-center">
              <Mic className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No podcasts yet</h3>
              <p className="text-gray-400 mb-6">Create your first AI-powered podcast channel</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
                Create Your First Podcast
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      {podcast.niche}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{podcast.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{podcast.episodes} episodes</span>
                    <span>{podcast.listeners.toLocaleString()} listeners</span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition">
                      Manage
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm font-medium transition">
                      Analytics
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-800 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
              <Plus className="h-6 w-6 text-purple-400" />
              <div className="text-left">
                <p className="text-white font-medium">Generate Episode</p>
                <p className="text-gray-400 text-sm">Create new AI episode</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
              <BarChart className="h-6 w-6 text-blue-400" />
              <div className="text-left">
                <p className="text-white font-medium">View Analytics</p>
                <p className="text-gray-400 text-sm">See performance metrics</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition">
              <Settings className="h-6 w-6 text-gray-400" />
              <div className="text-left">
                <p className="text-white font-medium">Settings</p>
                <p className="text-gray-400 text-sm">Configure preferences</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
