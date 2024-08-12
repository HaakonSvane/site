/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetPostQuery($slug: String!) {\n        blogPostCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                content\n            }\n        }\n    }\n": types.GetPostQueryDocument,
    "\n    query GetProjectQuery($slug: String!) {\n        projectCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                description\n                siteUrl\n                githubUrl\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": types.GetProjectQueryDocument,
    "\n    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {\n        projectCollection(where: { slug: $projectSlug }) {\n            items {\n                postsCollection(where: {slug: $postSlug}, limit: 1) {\n                    items {\n                        title\n                        content\n                    }\n                }\n            }\n        }\n    }\n\n": types.GetProjectPostQueryDocument,
    "\n    query GetPostsQuery {\n        blogPostCollection {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": types.GetPostsQueryDocument,
    "\n    query GetProjectPostsQuery($projectSlug: String!) {\n        projectPostCollection(where: { project: { slug: $projectSlug } }) {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": types.GetProjectPostsQueryDocument,
    "\n    query GetProjectsQuery {\n        projectCollection {\n            items {\n                title\n                slug\n                title\n                synopsis\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": types.GetProjectsQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetPostQuery($slug: String!) {\n        blogPostCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                content\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPostQuery($slug: String!) {\n        blogPostCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                content\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjectQuery($slug: String!) {\n        projectCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                description\n                siteUrl\n                githubUrl\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProjectQuery($slug: String!) {\n        projectCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                description\n                siteUrl\n                githubUrl\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {\n        projectCollection(where: { slug: $projectSlug }) {\n            items {\n                postsCollection(where: {slug: $postSlug}, limit: 1) {\n                    items {\n                        title\n                        content\n                    }\n                }\n            }\n        }\n    }\n\n"): (typeof documents)["\n    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {\n        projectCollection(where: { slug: $projectSlug }) {\n            items {\n                postsCollection(where: {slug: $postSlug}, limit: 1) {\n                    items {\n                        title\n                        content\n                    }\n                }\n            }\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetPostsQuery {\n        blogPostCollection {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPostsQuery {\n        blogPostCollection {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjectPostsQuery($projectSlug: String!) {\n        projectPostCollection(where: { project: { slug: $projectSlug } }) {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProjectPostsQuery($projectSlug: String!) {\n        projectPostCollection(where: { project: { slug: $projectSlug } }) {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjectsQuery {\n        projectCollection {\n            items {\n                title\n                slug\n                title\n                synopsis\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProjectsQuery {\n        projectCollection {\n            items {\n                title\n                slug\n                title\n                synopsis\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;