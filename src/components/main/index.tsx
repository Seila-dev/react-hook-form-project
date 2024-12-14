import styled from "styled-components";
import { useForm } from 'react-hook-form';

export const Main = () => {
  
  interface Data {
    budget: string;
    email: string;
    name: string;
    service: string;

  }
    const { register, handleSubmit, formState: { errors }} = useForm<Data>();

  const handleSubmitForm = (data: Data) => {
    console.log(data)
  }

    return (
      <>
       <MainContainer>
        <Division className="first division">
          <div className="description">
            <Title>Let's Talk</Title>
            <Description>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help</Description>
          </div>
          <SocialMediaItems className="email">
            <h2>Email</h2>
            <p>beebs@gmail.com</p>
          </SocialMediaItems>
          <SocialMediaItems className="social-media">
            <h2>Socials</h2>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </SocialMediaItems>

        </Division>
        <Division className="second division">
          <Form method="POST" onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="name" className="label">Name</label>
            <input 
            type="text" 
            id="name" 
            className="input" 
            {
              ...register('name', {
                required: 'O nome é obrigatório',
              })
            }
            />
            {errors.name && <Error>{errors.name.message}</Error>}

            <label htmlFor="email" className="label">Email</label>
            <input 
            type="email" 
            id="email" 
            className="input"
            {
              ...register('email', {
                required: "O email é obrigatório"
              })
            }
            />
            {errors.email && <Error>{errors.email.message}</Error>}

            <label htmlFor="service" className="label">What service are you interested in</label>
            <select 
            id="service" 
            className="input"
            {
              ...register('service', {
                required: "O select é obrigatório"
              })
            }
            >
              <option value="">Select a service</option>
              <option value='Teste'>Teste</option>
              <option value='Teste 2'>Teste 2</option>
              <option value='Teste 3'>Teste 3</option>
            </select>
            {errors.service && <Error>{errors.service.message}</Error>}

            <label htmlFor="budget" className="label">Budget </label>
            <select 
            id="budget" 
            className="input"
            {
              ...register('budget', {
                required: "O orçamento é obrigatório"
              })
            }
            >
              <option value="">Select a Budget</option>
              <option value="Teste">Teste</option>
              <option value="Teste 2">Teste 2</option>
              <option value="Teste 3">Teste 3</option>
            </select>
            {errors.budget && <Error>{errors.budget.message}</Error>}

            <label htmlFor="textarea" className="label">Message (Optional) </label>
            <textarea name="textarea" id="textarea" className="textarea"></textarea>

            <button type="submit" className="button-submit">Submit</button>
          </Form>
        </Division>
       </MainContainer>
      </>
    )
  }

const Error = styled.p`
  color: red;
  font-size: 10px;
  margin-bottom: 10px;
`

const MainContainer = styled.main`
  display: flex;
  padding: 5px 30px;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 10px auto;
  @media(max-width: 768px){
    flex-direction: column;
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  @media(max-width: 500px){
    font-size: 40px;
  }
`

const Description = styled.p`
  padding-right: 100px;
    @media(max-width: 768px){
    padding: 0;
  }
`

const SocialMediaItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`

const Division = styled.div`
  width: 50%;
  @media(max-width: 768px){
    width: 100%;
    align-item: center;
    display: flex;
    flex-direction: column;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  .input, .textarea{
    border: none;
    outline: none;
    padding: 10px;
    background: #e8eaed;
    margin-bottom: 10px;
  }

  .label{
    margin-bottom: 10px;
    font-size: 15px;
  }
  .textarea{
    height: 100px;
    font-family: "Poppins", sans-serif;
  }

  select{
    font-family: "Poppins", sans-serif;
  }

  .button-submit{
    background: black;
    color: white;
    padding: 15px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    cursor: pointer;
  }

`