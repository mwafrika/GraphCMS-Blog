import { gql, request } from "graphql-request";
import React from "react";
const graphqlAPI = process.env.NEXT_PUBLIC__GRAPHCMS_ENDPOINT;

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const response = await request(graphqlAPI, query);
  return response.postsConnection.edges;
};
