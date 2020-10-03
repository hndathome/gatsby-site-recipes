
import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { firestore } from "../../firebase"
import Layout from "../components/Layout"
import CommentPanel from "../components/CommentPanel"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
}

export default function RecipeTemplate({ data }) {
    const recipe = data.contentfulRecipes

    const [comments, setComments] = useState([])

    useEffect(() => {
        firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
            const posts = snapshot.docs
                .filter(doc => doc.data().Page === recipe.name)
                .map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
            setComments(posts)
        })
    }, [recipe])

    return (
        <Layout>
            <div role="main">
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1>{recipe.name}</h1>
                    </div>
                </section>
                <section class="jumbotron bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <img src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
                            </div>
                            <div class="col-12 col-md-6">
                                <p class="lead text-muted">{documentToReactComponents(recipe.richDescription.json, options)}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <CommentPanel comments={comments} page={recipe.name} />

            </div>
        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
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
`
