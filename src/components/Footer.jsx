function Footer({ totalJobs, itJobsCount }) {
  return (
    <footer>
      <p>Total jobs: {totalJobs}</p>
      <p>IT jobs: {itJobsCount}</p>
    </footer>
  );
}

export default Footer;