<html lang="en">
<%- include("./partials/head.ejs") %>

<body>
  <%- include("./partials/nav.ejs") %>

    <div class="blogs content">
        <h2>All Blogs</h2>

        <% if (blogs.length > 0) { %>
            <% blogs.forEach(blog => { %>
              <a class= "single" href="/blogs/<%= blog_id %">
                <h3 class="title"><%= blog.title %></h3>
                <p class="snippet"><%= blog.snippet %></p>
              </a>
            <% }) %>
        <% } else { %>
            <p>There are no blogs to display...</p>
        <% } %>
    </div>

  <%- include("./partials/footer.ejs") %>
</body>
</html>