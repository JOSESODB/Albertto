
async function loadLuxuryProducts() {
    try {
      const response = await fetch("products.json"); // Load the JSON file
      const products = await response.json();
      const galleryContainer = document.getElementById("gallery-container");

      // Clear existing content
      galleryContainer.innerHTML = "";

      
      
      products.forEach(product => {

        //   const productHTML = `
        //     <div class="col-lg-4 menu-item">
        //       <a href="${product.image}" class="glightbox">
        //         <img src="${product.image}" class="menu-img img-fluid" alt="">
        //       </a>
        //       <h4>${product.name}</h4>
        //       <p class="ingredients">${product.description}</p>
        //       <p class="price">${product.price}</p>
        //       <button type="button" class="btn" id="view-details-btn" data-bs-toggle="modal" data-bs-target="#all-${product.name.replace(/\s+/g, '')}">
        //         View Details
        //       </button>

        //       <!-- Modal -->
        //       <div class="modal fade" id="all-${product.name.replace(/\s+/g, '')}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div class="modal-dialog modal-lg">
        //           <div class="modal-content">
        //             <div class="modal-header">
        //               <h1 class="modal-title fs-1 text-black">${product.name}</h1>
        //               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div class="modal-body">
        //               <ul class="list-group list-group-flush">
        //                 <li class="list-group-item">Quantity: <span>${product.quantity}</span></li>
        //                 <li class="list-group-item">Price: <span>${product.price}</span></li>
        //                 <li class="list-group-item">Technology: <span>${product.technology}</span></li>
        //               </ul>
        //             </div>
        //             <div class="modal-footer">
        //               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //               <button class="btn btn-primary" data-bs-target="#all-${product.name.replace(/\s+/g, '')}2" data-bs-toggle="modal">Place order</button>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //      <div class="modal fade" id="all-${product.name.replace(/\s+/g, '')}2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        //           <div class="modal-dialog modal-dialog-centered  modal-lg">
        //             <div class="modal-content">
        //               <div class="modal-header">
        //                 <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Enter your details to enable us deliver your order</h1>
        //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //               </div>
        //               <div class="modal-body">
        //                 <form>
        //                   <div class="mb-3">
        //                     <label for="fullname" class="form-label">full name</label>
        //                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        //                     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        //                   </div>
        //                   <div class="mb-3">
        //                     <label for="address" class="form-label">Home address</label>
        //                     <textarea name="address" id="address" class="form-control"></textarea>
        //                     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        //                   </div>
        //                   <div class="mb-3">
        //                     <label for="exampleInputEmail1" class="form-label">Email address</label>
        //                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        //                     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        //                   </div>
        //                   <div class="mb-3">
        //                     <label for="phone-numbe" class="form-label">Phone Number</label>
        //                     <input type="tel" class="form-control" id="phone-number" placeholder="+2348035064933">
        //                   </div>

        //                   <div class="alert alert-dark me-auto" role="alert">
        //                     order is to be paid on delivery
        //                   </div>
        //                   <button type="button" class="btn btn-primary"  data-bs-target="#all-${product.name.replace(/\s+/g, '')}3" data-bs-toggle="modal">Proceed</button>
        //                 </form>
        //               </div>
                      
        //             </div>
        //           </div>
        //         </div>

        //         <div class="modal fade" id="all-${product.name.replace(/\s+/g, '')}3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        //           <div class="modal-dialog modal-dialog-centered">
        //             <div class="modal-content">
        //               <div class="modal-header">
        //                 <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">order status</h1>
        //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //               </div>
        //               <div class="modal-body">
        //                 <div class="alert alert-success" role="alert">
        //                   order placed successfully, you will get an email notification!
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <!-- end of view details feature -->
        //     `;
          
            const productHTML = `
                <div class="swiper-slide"><a class="glightbox" data-gallery="images-gallery" href="${product.image}"><img src="${product.image}" class="img-fluid" alt=""></a></div>
            `;

            galleryContainer.innerHTML += productHTML;
        
      });

    } catch (error) {
      console.error("Error loading luxury products:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", loadLuxuryProducts);

