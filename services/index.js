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

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy: createdAt_ASC
      last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
  }
  `;
  const response = await request(graphqlAPI, query);
  return response.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
          last: 3
        }
      ){
        title
        featuredImage:{
          url
        }
        createdAt
        slug
      } 
    }
  `;
  const response = await request(graphqlAPI, query);
  return response.posts;
};
