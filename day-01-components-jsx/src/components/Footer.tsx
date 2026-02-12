type FooterProps = {
  author: string;
};

function Footer({ author }: FooterProps) {
  return (
    <footer>
      <small>
        Built by {author} | {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;
