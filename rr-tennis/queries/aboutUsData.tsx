import client from '../apolloClient';
import { gql } from '@apollo/client';

export async function getAboutUsData() {
  const { data } = await client.query({
    query: gql`
      query getAboutUsData {
        aboutUs {
          data {
            id
            attributes {
              title
              description
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      aboutUsData: data.aboutUs
    },
  };
}