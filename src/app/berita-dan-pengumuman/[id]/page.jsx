import { StyledHeader } from '@/components/StyledHeader'

export default async function Page( params ) {

    console.log(params);
    return (
      <section >
        <StyledHeader title={params.title} variant="right"/>
        <p>{params.content}</p>
      </section>
    )
  }