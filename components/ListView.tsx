import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import Link from 'next/link'
import Image from "next/image";
const ListView = ({ products }: any) => {
  return (
    <Wrapper>
      {products.map((product: any) => {
        const { id, image, name, price, description } = product
        return (
          <article key={id}>
            <Image src={image} alt={name} width={300} height={200} style={{display: "block", objectFit: "cover", borderRadius: "var(--radius)", marginBottom: "1rem"}}/>
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link href={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
