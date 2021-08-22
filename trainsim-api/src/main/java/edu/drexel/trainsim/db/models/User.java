package edu.drexel.trainsim.db.models;

public class User {
    protected int id;
    protected String email;
    private final String first_name;
    private final String last_name;
    private final String email_send_transaction_detail;
    private final String phone;

    public User(int id, String email, String first_name, String last_name, String email_send_transaction_detail, String phone) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_send_transaction_detail = email_send_transaction_detail;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getEmail_send_transaction_detail() {
        return email_send_transaction_detail;
    }

    public String getPhone() {
        return phone;
    }
}
