import React, { useState } from 'react'
import styled from 'styled-components'
import Image from "next/image";

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <Wrapper>
      <Image src={main.url} alt='main' className='main' width={565} height={300} style={{ display: "block", borderRadius: "var(--radius)", objectFit: "cover"}}/>
      <div className='gallery'>
        {images.map((image: any, index) => {
          return (
            <Image
              src={image.url}
              alt={image.filename}
              key={index}
              width={100}
              height={100}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
              style={{ display: "block", borderRadius: "var(--radius)", objectFit: "cover"}}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
