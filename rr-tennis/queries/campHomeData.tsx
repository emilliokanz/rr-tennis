import client from '../apolloClient';
import { gql } from '@apollo/client';

export async function getCampHomeData() {
  const { data } = await client.query({
    query: gql`
      query getAboutUsData {
          camp {
            data {
              id
              attributes {
                title
                description
                camp {
                  title
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
      }
    `,
  });

  return {
    props: {
      campHomeData: data.camp
    },
  };
}