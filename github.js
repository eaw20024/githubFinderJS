class Github {
    constructor() {
        this.client_id = '2c6e0d70a11a701e072a';
        this.client_secret = 'f7471d6b3db222586ec4a189943a9097aadc0dec'
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // Github Fetch URL
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}