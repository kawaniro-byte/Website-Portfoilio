 document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  const galleryModal = document.getElementById('galleryModal');
  galleryModal.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;
    if (!trigger) return;
    document.getElementById('galleryModalImg').src = trigger.getAttribute('data-img');
    document.getElementById('galleryModalCaption').textContent = trigger.getAttribute('data-caption');
  });

  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  let confirmedOnce = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      alertBox.classList.add('d-none');
      confirmedOnce = false;
      return;
    }

    form.classList.add('was-validated');

    if (!confirmedOnce) {
      alertBox.classList.remove('d-none');
      alertBox.classList.add('show');
      confirmedOnce = true;
    } else {
      successModal.show();
      form.reset();
      form.classList.remove('was-validated');
      alertBox.classList.add('d-none');
      confirmedOnce = false;
    }
  });

  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  document.querySelectorAll('#navContent .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const nav = bootstrap.Collapse.getInstance(document.getElementById('navContent'));
      if (nav) nav.hide();
    });
  });