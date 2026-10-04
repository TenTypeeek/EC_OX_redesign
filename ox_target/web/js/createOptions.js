import { fetchNui } from './fetchNui.js';

const optionsWrapper = document.getElementById('options-wrapper');

function onClick() {
    this.style.pointerEvents = 'none';

    fetchNui('select', [this.targetType, this.targetId, this.zoneId]);
    setTimeout(() => (this.style.pointerEvents = 'auto'), 100);
}

function safeIconClass(value) {
    const cleaned = String(value ?? '').replace(/[^\w\s-]/g, '').trim();
    return cleaned || 'fa-solid fa-circle';
}

export function createOptions(type, data, id, zoneId) {
    if (data.hide) return;

    const option = document.createElement('div');
    option.className = 'option-container';
    option.targetType = type;
    option.targetId = id;
    option.zoneId = zoneId;

    const tile = document.createElement('div');
    tile.className = 'option-icon-tile';

    const icon = document.createElement('i');
    icon.className = `fa-fw ${safeIconClass(data.icon)} option-icon`;
    if (data.iconColor) icon.style.setProperty('color', String(data.iconColor), 'important');
    tile.appendChild(icon);

    const label = document.createElement('p');
    label.className = 'option-label';
    label.textContent = data.label ?? '';

    option.append(tile, label);
    option.addEventListener('click', onClick);
    optionsWrapper.appendChild(option);
}
