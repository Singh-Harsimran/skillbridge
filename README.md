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