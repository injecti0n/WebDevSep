sessionkey = user
sessionvalue = password


sessionStorage.user='atilla'
sessionStorage.pass='123456'
/* session.js
if user and pass not null
    redirect: dashboard
    if user-pass null is then
        redirect:login
*/
/*
login.js
        if visitor doesnt have account
            then click register
            or
            click login and create session into sessionStorage .user and .pass
                if success redirect to: dashboard
                if not ask again
*/

/*
register.js

validate inputs empty 
if not then create session here
and redirect to dashboard auto

*/

/*
dashboard
print username from sessionstorage
logout > clear sessions

*/