from flask_mail import Message
from your_flask_app import mail  # Ensure to import the mail object from your Flask app context

def send_new_device_alert(user, device_name):
    msg = Message('New Device Login Alert',
                  recipients=[user.email])
    msg.body = f"Hello {user.username},\n\nA new device ({device_name}) has logged into your account. If this wasn't you, please secure your account."
    mail.send(msg)
