from locust import HttpUser, task, between 

class MyUser(HttpUser):
    wait_time = between (1,3)

    @task
    def dashboard(self):
        self.client.get("https://sqe-frontend.vercel.app/")

    @task
    def faq_page(self):
        self.client.get("https://sqe-frontend.vercel.app/faq")

    @task
    def events_page(self):
        self.client.get("https://sqe-frontend.vercel.app/events")
    
    @task
    def best_selling_page(self):
        self.client.get("https://sqe-frontend.vercel.app/best-selling")



