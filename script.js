const menuBtn = document.getElementById('menuBtn');
    const navlinks = document.getElementById('navlinks');
    menuBtn.addEventListener('click', () => navlinks.classList.toggle('open'));
    navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-q').addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
