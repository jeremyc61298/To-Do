// common.js
// Jeremy Campbell
// Some common functions

const entity = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
};
 
function escapeHtml(text) {
    return text.replace(/[<>&"]/g, t => entity[t]);
}

module.exports = {escapeHtml};