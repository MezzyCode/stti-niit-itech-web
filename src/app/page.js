import { GenericCard, ProdiCard, SummaryCard } from "@/components/Cards"
import Icon from "@/components/Icon"

export default function Page() {
  return (
    <article>
      <SummaryCard
        title={'Kenapa STTI NIIT ?'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
        link={'/'} />
      <SummaryCard
        variant='right'
        title={'Salam ?'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
        link={'/'} />
      <ProdiCard></ProdiCard>
      <GenericCard
        icon={<Icon name={'school'}/>}
        title={'Pendaftaran'}
        description={'Persyaratan dan prosedur pendaftaran masuk I-Tech meliputi jenjang Sarjana, Magister, Doktoral dan Spesialis, Subspesialis dan Profesi.'}
        link={'/'}
      />
    </article>
  )
}
