import { MetadataRoute } from 'next'
import { getPortfolioRepos } from '@/lib/getPortfolioRepos'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tanaycodes.vercel.app'
  
  const repos = await getPortfolioRepos()
  
  const projectPages = repos.map((repo) => ({
    url: `${baseUrl}/${repo.name}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...projectPages,
  ]
}
