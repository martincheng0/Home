import * as React from "react"
import Layout from '../components/Layout'
import SEO from '../components/seo'

const ContactPage = () => {

  return (
    <>
      <Layout>
        <SEO title="About" description="something friendly" />
        <div className="py-20 grid content-center gap-10 h-screen justify-self-center md:px-36">
          <form name="contact" method="POST" data-netlify="true">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-black font-mono">Your Name</span>
                <input type="text" name="name" class="mt-1 block w-full h-10 rounded-md border border-black p-4" placeholder="martin" />
              </label>
              <label class="block">
                <span class="text-black font-mono">Your Email Address</span>
                <input type="text" name="email" class="mt-1 block w-full h-10 rounded-md border border-black p-4" placeholder="martin@mail.com" />
              </label>
              <label class="block">
                <span class="text-black font-mono">What?</span>
                <textarea type="text" name="comment" class="mt-1 block w-full h-full rounded-md border border-black p-4" placeholder="nice one" row="5" />
              </label>
              <button type="submit" className="bg-black rounded-md h-10 my-5">
                <span class="text-white font-mono font-bold">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage

