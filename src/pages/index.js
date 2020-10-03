import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
export default function Home({ data }) {
  return (
    <Layout>
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1>Quarantine Bakes</h1>
            <p class="lead text-muted">An album of <a href="https://www.kingarthurbaking.com/recipes">King Arthur Baking recipes</a> baked during COVID-19 quarantine.</p>
          </div>
        </section>
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              {data.allContentfulRecipes.nodes.map((node, index) => (
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225" focusable="false" src={node.image.file.url} alt={node.name} />
                    <div class="card-body">
                      <p class="card-text">{node.name}</p>
                      {/* text-truncate */}
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <a href={node.name} type="button" class="btn btn-sm btn-outline-secondary">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <h1>Hello Gatsby!</h1>
        <p>What a world!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div> */}
      </main>
    </Layout>

  )
}

export const query = graphql`query MyQuery {
  allContentfulRecipes {
    nodes {
      name
      image {
        file {
          url
        }
      }
      richDescription {
        json
      }
    }
  }
}
`