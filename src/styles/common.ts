import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    font-size: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;

    .image {
      width: 20em;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .form {
      margin-top: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        label {
          color: var(--clr-grey-3);
          font-size: 1rem;
          text-transform: capitalize;
          letter-spacing: var(--spacing);
        }
        input {
          margin-top: 6px;
          min-width: 18em;
          height: 37px;
          padding: 0px 10px;
          font-size: 16px;
          font-family: 'Open Sans', sans-serif;
          background-color: #f3f3f3;
          border: 0;
          border-radius: 4px;
          margin-bottom: 31px;
          transition: all 250ms ease-in-out;
          &:hover {
            background-color: #ffffff;
            box-shadow: 0px 0px 8px 0.3px #0e81ce96;
          }

          &:focus {
            outline: none;
            box-shadow: 0px 0px 14px 0.8px #3474dbb2;
          }
          &:placeholder-shown {
            letter-spacing: var(--spacing);
          }
        }
      }
    }
  }

  .footer {
    margin-top: 2em;
  }
`
