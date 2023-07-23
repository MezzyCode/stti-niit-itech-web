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

export function getBaseLink(pathname, nestingDepth) {
  const parts = pathname.split('/'); // Split the pathname by slashes
  const baseLink = parts.slice(0, nestingDepth).join('/'); // Join the specified number of parts back together
  return baseLink;
}

export {NAVLINKS};