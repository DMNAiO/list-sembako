const stockSections = {
  'SEMBAKO': [
    'Teh Sosro', 'Tong Tji Sachet', 'Sariwangi Sachet', 'Nescafe Sachet', 'Kapal Api Kecil', 'Kapal Api Besar', 'Kapal Api Mix', 'Good Day Coolin', 'Good Day Chococinno', 'Good Day Carribean', 'Good Day Mocacinno', 'Coffeemix', 'Frisian Flag Coklat', 'Frisian Flag Putih', 'Dancow Coklat', 'Energen Jahe', 'Energen Vanilla', 'Energen Kurma', 'Energen Kc Hijau', 'Tabura Jahe', 'Tabura Bawang Merah', 'Tabura Kencur', 'Tabura Pala', 'Tabura Laos', 'Kobe Tepung Geprek', 'Kobe Tempe Kriuk', 'Sajiku Tempe Krispi', 'Sajiku Spicy', 'Sajiku Serbaguna', 'Sajiku Golden', 'Sasa Pisang', 'Sasa Bakwan', 'Sajiku Sop', 'Sajiku Nasi Goreng', 'Sajiku Capcay', 'Kobe Kalasan', 'Kobe Ayam Lengkuas', 'Racik Sop', 'Racik Asem', 'Racik Lodeh', 'Racik Tempe', 'Racik Ikan', 'Racik Tumis', 'Racik Ayam Rempah', 'Racik Nasgor Pedas', 'Racik Nasgor Ori', 'Racik Ayam Goreng', 'Desaku Bawang Bubuk', 'Desaku Marinasi', 'Desaku Cabai Bubuk', 'Desaku Ketumbar', 'Desaku Kunyit', 'Desaku Opor', 'Desaku Sambal Goreng', 'Desaku Kari', 'Desaku Balado', 'Blue Band 20g', 'Kobe Nasi Uduk', 'Kobe Nasi Kuning', 'Bango Sachet', 'ABC Sachet', 'Kuah Sop', 'Bumbu Sop', 'Kuah Bakso', 'Magic Lezat', 'Saori Asam Manis', 'Saori Mentega', 'Saori Teriyaki', 'Saori Lada Hitam', 'Saori Tiram', 'Kecap ABC', 'Kecap Bango 1.000', 'Boncabe Lev10', 'Boncabe Lev15', 'Boncabe Lev50', 'Aida', 'Totole Besar', 'Totole Kecil', 'Filma', 'ABC Sambal Terasi', 'Uleg All Varian', 'ABC Terasi', 'Panili', 'Fermipan', 'Pecel Bagindo', 'Maizenaku', 'Maizena Mamasuka', 'Maizena Rosebrand', 'Mataroda Besar', 'Sunco 2L', 'Sania 1L', 'Sania 2L', 'Fortune 1L', 'Resto 1L', 'Fitri 400ml', 'Hemart 1L', 'Beras', 'Gula', 'Minyak Kita', 'Minyak Hemart 900ml', 'Minyak Gelas', 'Masako Ayam', 'Masako Sapi', 'Masako Jamur', 'Royco Ayam', 'Royco Sapi', 'Ladaku', 'Kara', 'Terasi ABC', 'Mataroda 500an', 'Ebi', 'Kemiri', 'Asam Jawa'
  ],
  'FROZEN FOOD': [
    'Hemato Sapi', 'Champ Kecil', 'Champ Besar', 'Teman Laut', 'Rolade Panjang', 'Rolade Pendek', 'Galantin', 'Saza', 'Hemato Nugget 500g', 'Hemato Nugget 250g', 'Baso Kecil', 'Nugget Kecil', 'Pangsit', 'Lumpia', 'Kelapa Parut', 'Putih Telur'
  ]
};

const units = ['satuan', 'renteng', 'pak', 'dus', 'kg', 'gram', 'liter', 'ml', 'botol', 'kaleng', 'rak', 'karung'];
const initialStockValues = {
  'SEMBAKO': '0 0 0 0 0 0 5 2 0 0 0 6 6 6 0 4 0 4 0 0 0 0 0 4 0 3 0 6 7 6 6 7 0 0 4 0 0 7 0 1 2 2 5 0 0 6 4 5 1 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 5 16 3 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 14 2 0 9 0 2 6 0 0 0 3 1 0 0 5 0 0'.split(' '),
  'FROZEN FOOD': '1 1 0 3 3 0 2 0 5 5 10 12 0 9 0 1'.split(' ')
};
const initialRenteng = new Set(['SEMBAKO:39', 'SEMBAKO:40', 'SEMBAKO:41', 'SEMBAKO:48', 'SEMBAKO:70', 'SEMBAKO:71', 'SEMBAKO:105', 'SEMBAKO:106']);
const stockStorageKey = 'sembakoi-stock-v2';
const stockPhotoUrls = {
  pantry: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
  dairy: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80',
  grains: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80',
  oil: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80',
  spice: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
  frozen: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80'
};
const productGrid = document.querySelector('#product-grid');
const emptyState = document.querySelector('#empty-state');
const toast = document.querySelector('.toast');
let toastTimer;

const state = {
  section: 'SEMBAKO',
  search: '',
  stock: loadStock()
};

function allProducts() {
  return Object.entries(stockSections).flatMap(([section, names]) => names.map((name, index) => ({ section, name, index })));
}

function stockKey(section, index) {
  return `${section}:${index}`;
}

function createInitialStock() {
  return Object.entries(initialStockValues).reduce((stock, [section, values]) => {
    values.forEach((value, index) => {
      stock[stockKey(section, index)] = { value, unit: initialRenteng.has(stockKey(section, index)) ? 'renteng' : 'satuan' };
    });
    return stock;
  }, {});
}

function loadStock() {
  try {
    const stored = localStorage.getItem(stockStorageKey);
    if (stored === null) return createInitialStock();
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === 'object' ? parsed : createInitialStock();
  } catch {
    return createInitialStock();
  }
}

function getStock(section, index) {
  const key = stockKey(section, index);
  if (!state.stock[key]) state.stock[key] = { value: '', unit: 'satuan' };
  return state.stock[key];
}

function saveStock() {
  localStorage.setItem(stockStorageKey, JSON.stringify(state.stock));
  renderProgress();
}

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}
function photoForProduct(product) {
  if (product.section === 'FROZEN FOOD') return stockPhotoUrls.frozen;
  const name = product.name.toLowerCase();
  if (/teh|kopi|nescafe|good day|coffeemix/.test(name)) return stockPhotoUrls.coffee;
  if (/frisian|dancow|energen/.test(name)) return stockPhotoUrls.dairy;
  if (/minyak|sunco|sania|fortune|resto|fitri|hemart|filma/.test(name)) return stockPhotoUrls.oil;
  if (/beras|gula|maizena|maizenaku|pecel/.test(name)) return stockPhotoUrls.grains;
  if (/kobe|sajiku|sasa|racik|desaku|bumbu|kuah|saori|kecap|boncabe|sambal|terasi|masako|royco|ladaku|kara|tabura/.test(name)) return stockPhotoUrls.spice;
  return stockPhotoUrls.pantry;
}

function renderUnitOptions(selected) {
  return units.map((unit) => `<option value="${unit}"${unit === selected ? ' selected' : ''}>${unit}</option>`).join('');
}

function visibleProducts(section) {
  const query = state.search.trim().toLowerCase();
  return stockSections[section].map((name, index) => ({ section, name, index })).filter((product) => !query || product.name.toLowerCase().includes(query));
}

function renderProductCard(product) {
  const item = getStock(product.section, product.index);
  const itemNumber = String(product.index + 1).padStart(3, '0');
  return `<article class="product-card stock-product-card" data-section="${product.section}" data-index="${product.index}">
    <div class="stock-card-visual"><img src="${photoForProduct(product)}" alt="" loading="lazy" /></div>
    <div class="stock-card-top"><span class="stock-index">${itemNumber}</span><span class="product-category">${product.section}</span></div>
    <h3 class="stock-card-name">${escapeHTML(product.name)}</h3>
    <div class="stock-card-controls">
      <div class="stock-quantity" aria-label="Jumlah ${escapeHTML(product.name)}">
        <button class="stock-step" type="button" data-step="-1" aria-label="Kurangi jumlah">−</button>
        <input class="stock-input" type="number" min="0" step="1" inputmode="numeric" value="${item.value}" placeholder="Jumlah" aria-label="Jumlah ${escapeHTML(product.name)}" />
        <button class="stock-step" type="button" data-step="1" aria-label="Tambah jumlah">+</button>
      </div>
      <label class="stock-unit-wrap"><span class="visually-hidden">Satuan ${escapeHTML(product.name)}</span><select class="stock-unit" aria-label="Satuan ${escapeHTML(product.name)}">${renderUnitOptions(item.unit)}</select></label>
    </div>
  </article>`;
}

function renderProducts() {
  const sectionsMarkup = Object.keys(stockSections).map((section) => {
    const products = visibleProducts(section);
    const slug = section.toLowerCase().replace(/\s+/g, '-');
    return `<section class="stock-list-section" id="stock-${slug}" data-stock-section="${section}">
      <div class="stock-list-heading"><div><span class="stock-list-index">${section === 'SEMBAKO' ? '01' : '02'}</span><h3>${section}</h3></div><span>${products.length} dari ${stockSections[section].length} barang</span></div>
      <div class="product-grid stock-grid">${products.map(renderProductCard).join('')}</div>
    </section>`;
  }).join('');
  const hasProducts = Object.keys(stockSections).some((section) => visibleProducts(section).length > 0);
  productGrid.innerHTML = sectionsMarkup;
  productGrid.hidden = !hasProducts;
  emptyState.hidden = hasProducts;
}

function renderProgress() {
  const recorded = allProducts().filter(({ section, index }) => getStock(section, index).value !== '').length;
  const progress = document.querySelector('#stock-progress');
  if (progress) progress.textContent = `${recorded}/${allProducts().length} barang dicatat`;
}

function showToast(message) {
  document.querySelector('#toast-message').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function setSection(section) {
  if (!stockSections[section]) return;
  state.section = section;
  document.querySelectorAll('[data-filter]').forEach((button) => button.classList.toggle('active', button.dataset.filter === section));
  document.querySelector(`#stock-${section.toLowerCase().replace(/\s+/g, '-')}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateValue(card, rawValue) {
  const section = card.dataset.section;
  const index = Number(card.dataset.index);
  const item = getStock(section, index);
  if (rawValue === '') item.value = '';
  else item.value = String(Math.max(0, Math.floor(Number(rawValue) || 0)));
  const input = card.querySelector('.stock-input');
  input.value = item.value;
  saveStock();
}

function changeValue(card, delta) {
  const item = getStock(card.dataset.section, Number(card.dataset.index));
  const current = item.value === '' ? 0 : Number(item.value);
  item.value = String(Math.max(0, current + delta));
  card.querySelector('.stock-input').value = item.value;
  saveStock();
}

function buildWhatsAppMessage() {
  const lines = ['UPDATE STOK SEMBAKO', ''];
  Object.entries(stockSections).forEach(([section, names]) => {
    lines.push(section, '');
    names.forEach((name, index) => {
      const item = getStock(section, index);
      if (item.value !== '') lines.push(`- ${name}: ${item.value} ${item.unit}`);
    });
    lines.push('');
  });
  return lines.join('\n').trim();
}

function finishStock() {
  const recorded = allProducts().filter(({ section, index }) => getStock(section, index).value !== '');
  if (!recorded.length) {
    showToast('Belum ada stok yang dicatat');
    return;
  }
  saveStock();
  const message = buildWhatsAppMessage();
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  showToast('Update stok siap dibagikan ke WhatsApp');
}

document.addEventListener('click', (event) => {
  const sectionButton = event.target.closest('[data-filter], [data-category]');
  if (sectionButton) {
    setSection(sectionButton.dataset.filter || sectionButton.dataset.category);
    return;
  }

  const stepButton = event.target.closest('[data-step]');
  if (stepButton) {
    changeValue(stepButton.closest('.stock-product-card'), Number(stepButton.dataset.step));
    return;
  }


  if (event.target.closest('.announcement-close')) document.querySelector('.announcement-bar').remove();

  if (event.target.closest('.menu-toggle')) {
    const menu = document.querySelector('.mobile-nav');
    const open = menu.classList.toggle('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  }

  if (event.target.closest('.mobile-nav a')) {
    document.querySelector('.mobile-nav').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
  }

  if (event.target.closest('.search-toggle')) {
    const panel = document.querySelector('.search-panel');
    const open = panel.classList.toggle('open');
    document.querySelector('.search-toggle').setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    if (open) document.querySelector('#search-input').focus();
  }

  if (event.target.closest('.search-clear')) {
    document.querySelector('#search-input').value = '';
    state.search = '';
    renderProducts();
  }

  if (event.target.closest('#reset-filter')) {
    document.querySelector('#search-input').value = '';
    state.search = '';
    renderProducts();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.matches('.stock-input')) updateValue(event.target.closest('.stock-product-card'), event.target.value);
  if (event.target.matches('#search-input')) {
    state.search = event.target.value;
    renderProducts();
  }
});

document.addEventListener('change', (event) => {
  if (!event.target.matches('.stock-unit')) return;
  const card = event.target.closest('.stock-product-card');
  getStock(card.dataset.section, Number(card.dataset.index)).unit = event.target.value;
  saveStock();
  showToast('Satuan tersimpan');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.search-panel').classList.remove('open');
    document.querySelector('.mobile-nav').classList.remove('open');
  }
});

document.querySelectorAll('#finish-stock, #finish-stock-promo, #finish-stock-secondary').forEach((button) => button.addEventListener('click', finishStock));
renderProducts();
renderProgress();
