// Write here to add links
const pages = ['Home', 'Akademik', 'Informasi', 'Layanan Online', 'Tentang I-Tech'];

const NAVLINKS = pages.map((link) => {
  const linkName = link;
  let linkHref = '/' + link.replace(/\s+/g, '-').toLowerCase();

  if (linkName === 'Home') {
    linkHref = '/';
  }
  return { name: linkName, href: linkHref };
});

export {NAVLINKS};