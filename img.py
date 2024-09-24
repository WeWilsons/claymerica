import os

# Define the path to the folder containing your images
image_folder = r"C:\Users\entro\Desktop\website\images\gallery4"

# Define the base URL where the images are located in your project (for use in the HTML)
base_url = "images/gallery4/"

# Get a list of all image files in the folder (jpg, png, gif, etc.)
image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
image_files = [f for f in os.listdir(image_folder) if f.lower().endswith(image_extensions)]

# Template for each gallery item in HTML
gallery_template = '''
<div class="gallery-item">
  <a href="{base_url}{image}" data-lightbox="gallery4" data-title="{title}">
    <img src="{base_url}{image}" alt="{title}" loading="lazy" />
  </a>
</div>
'''

# Function to generate HTML for each image
def generate_gallery_html(image_files):
    html_output = ""
    for image in image_files:
        # Use the image name without the extension as the title (you can modify this logic)
        title = os.path.splitext(image)[0].replace("-", " ").replace("_", " ").title()
        # Create HTML for each image using the template
        html_output += gallery_template.format(base_url=base_url, image=image, title=title)
    return html_output

# Generate the HTML
html_code = generate_gallery_html(image_files)

# Print the HTML output
print(html_code)

# Optionally, you can save the output to a file for easy copy-pasting
output_file = "gallery_output.html"
with open(output_file, "w") as file:
    file.write(html_code)

print(f"HTML code has been written to {output_file}")
