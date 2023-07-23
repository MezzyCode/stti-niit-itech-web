import { ListContainer } from "@/components/ListContainer";
import { StyledHeader } from "@/components/StyledHeader";
import { DosenCard } from "@/components/cards/DosenCard";
import { ProdiCard } from "@/components/cards/ProdiCard";
import { SummaryCard } from "@/components/cards/SummaryCard";
import { getPostByName, getProdi, getStaff } from "@/utils/sanity/utils"

export const metadata = {
  title: 'ITech: Akademik',
  description: 'Halaman Akademik'
}

export default async function Page() {
  const prodi = await getProdi();
  const staff = await getStaff();

  return (
    <section>
      <StyledHeader
        id='program-studi'
        title='Program Studi'
        variant='center' />
      <ListContainer>
        {prodi.map((item) => (
          <ProdiCard key={item._id} props={item} />
        ))}
      </ListContainer>
      <SummaryCard
        id='verifikasi-ijazah'
        props={await getPostByName('Verifikasi Ijazah')} />
      <StyledHeader
        id='staff'
        title='Dosen dan Pengajar Profesional'
        variant='center'
      />
      <p>Dosen kami adalah pengajar profesional lulusan dalam dan luar negeri dengan latar belakang keahlian yang mendukung pendidikan di Program Studi.</p>
      <ListContainer>
        {staff.map((item) => (
          <DosenCard key={item._id} props={item} />
        ))}
      </ListContainer>
    </section>
  )
}