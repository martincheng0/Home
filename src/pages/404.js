import * as React from "react"
import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 Not Found" description="something forgotten"/>
      <main>
        <div>
          <h1 className="text-6xl font-light text-center py-44">404 Page not found</h1>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
