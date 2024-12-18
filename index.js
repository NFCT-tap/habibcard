// Toggle visibility of category text
function toggleText(categoryId) {
    const categoryText = document.getElementById(categoryId);
    categoryText.style.display = categoryText.style.display === "none" ? "block" : "none";
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    
    shareButton.addEventListener('click', async () => {
        const urlToShare = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Jawed Habib Digital Business Card',
                    text: 'Check out this digital business card for Jawed Habib!',
                    url: urlToShare,
                });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(urlToShare);
                alert('Link copied to clipboard!');
            } else {
                alert('Sharing not supported on this browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    });
});

  
// Save Contact Button - Creates a downloadable vCard file

document.getElementById('save-contact-button').addEventListener('click', () => {
    const vCardData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:Jawed Habib
  ORG:Jawed Habib Salons
  TEL:+91 9347393957
  EMAIL:contact@jawedhabib.com
  END:VCARD
    `;

    // Convert the vCard data to Base64
    const base64VCard = btoa(vCardData);

    // Create a data URI with Base64-encoded vCard
    const vCardUri = `data:text/vcard;base64,${base64VCard}`;

    const a = document.createElement('a');
    a.href = vCardUri;
    a.download = 'Jawed_Habib.vcf';
    a.click();
});

  
