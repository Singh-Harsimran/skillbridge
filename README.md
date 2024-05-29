    async function loadSkillbridge(skillbridge) {
    const response = await fetch(skillbridge);
    const data = await response.json();
        window.skillbridge = {};
        window.skillbridge = data;
        
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = data.style;
        document.head.appendChild(link);
        
        const script = document.createElement('script');
        script.src = data.script;
        script.defer = true;
        script.type = 'module'
        document.body.appendChild(script);
    }
    loadSkillbridge("https://hhmelements.com/skillbridge/l5gc/")



    <IfModule mod_rewrite.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET,HEAD,OPTIONS,POST,PUT"
    Header set Access-Control-Allow-Headers "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    </IfModule>