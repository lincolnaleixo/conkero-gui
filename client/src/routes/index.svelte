<script context="module">
  export async function load({ session }) {
    // Get the authenticated user from the current session
    let { user } = session;
    // redirect the user to home page incase the user is not authenticated
    if (user == null) {
      return {
        status: 302,
        redirect: "/auth/register",
      };
    }
  }
</script>
